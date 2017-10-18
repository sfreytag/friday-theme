---
title:  Google App Engine HTTP Auth
tags:
  - python
  - google app engine
---


Google App Engine can serve static content as well as apps, which makes it a handy place to run sites like this one powered by Jekyll ([more info here](https://cloud.google.com/appengine/docs/python/gettingstartedpython27/staticfiles)). But familiar features from other webservers are missing and need reinventing, such as default directory indexes and HTTP Basic Auth. Here's some info about how to add Basic Auth.

<!--more-->

My use case is that I use this website to generate project docs for my freelance work. I prefer to keep this confidential so I wrap it in a simple HTTP Basic Auth user/password, which can be given to anyone needing to access the docs.

##How To

[This blog post](https://rationalpie.wordpress.com/2010/01/10/forcing-digest-authentication-in-web-application/#more-27) is a good introduction to using HTTP Basic Auth with Google App Engine. It describes how to map a URL to a Python handler that sends the HTTP Basic Auth headers, handles the responses, and deals with authentication. 

Once a static URL is mapped to a Python handler to secure its resource via HTTP Basic Auth, that URL cannot be served via a `static_dir` or `static_files` directive. So if the authentication passes, the handler must read the static file off the file system and send it back in its response. This is described in [this Stack Overflow thread](http://stackoverflow.com/questions/2630205/read-a-file-on-app-engine-with-python/2632751#2632751).

Handling static files with a Python handler means the files will be served via a frontend instance, which will require one to start or might slow down existing running instances. This is possibly costly or inefficient, so in the approach shown below, I only send \*.html to the Python handler, and the CSS and JS remains served straight out of a static dir. It is possible to mix static files and files mapped to a handler by marking the static directory with `application_readable: true` in the app.yaml file. 

##Code

Create your static directory and wrap the HTML in Basic Auth by referring it to a script hander. Everything else in the static dir is served directly as static content. Mark it as application_readable: true to allow the handler to be able to read the HTML content.

**app.yaml:**

{% highlight yaml %}

    - url: /your_static_dir/.*.html
      script: auth.application

    - url: /your_static_dir
      static_dir: /your_static_dir
      application_readable: true

{% endhighlight %}

The script handler collects the requests for the static HTML and does the HTTP Auth. If it is OK, it reads the file off the GAE disk and sends it back. This is the same code as the rationalpie blog post, but modified for webapp2 and to include file reading:

**auth.py**

{% highlight python %}

    """
    auth.py
    """

    import os
    import webapp2
    import base64

    class AdminHandler(webapp2.RequestHandler):
        def get(self):
            # The auth function returns the supplied user name if successfully
            # authenticated or None otherwise.
            user = self.doAuth()
            if not user:
                self.response.out.write("Access Denied")
                return
            # Otherwise, we are authenticated, so take advantage of our 
            # application_readable=true directive in app.yaml and return the 
            # requested static file.
            html = open(os.path.dirname(__file__) + self.request.path, 'r')
            self.response.out.write(html.read())

        def doAuth(self):
            # Test if some auth info is already supplied.
            auth = self.request.headers.get("Authorization")

            # Ask for info if it is not supplied.
            if not auth:
                # Send headers for BasicAuth. Adjust YourRealm here!
                self.response.headers['WWW-Authenticate'] = 'Basic realm="YourRealm"'
                self.response.set_status(401)
                return False

            # Browsers send the auth header value as:
            # Basic space base64encode(user:password)
            # We first retrieve the encoded user:password string
            auth = auth.split()[1]

            # The Base64 encoded value can sometimes have padding errors.
            # base64 lib will throw a type error on this. A hacky
            # solution is to see if adding one or two "=" at the end
            # makes up for the padding. 
            try:
                user, password = base64.b64decode(auth).split(":")
            except TypeError:
                try:
                    user, password = base64.b64decode(auth + "=").split(":")
                except TypeError:
                    try:
                        user, password = base64.b64decode(auth + "==").split(":")
                    except TypeError:
                        # unable to check padding errors, give up!
                        return None

            # Finally, the username and password are defined here.
            if user == "foo" and password == "bar":
                return user

        return None


    application = webapp2.WSGIApplication([
        ('/your_static_dir/.*.html', AdminHandler),
    ], debug=True)

{% endhighlight %}


