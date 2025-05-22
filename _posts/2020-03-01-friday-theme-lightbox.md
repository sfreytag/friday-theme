---
title:  How to set up the an Image Lightbox
tags:
  - Friday Theme
  - HTML
  - images
  - Markdown
  - Liquid
  - Image Gallery
images:
  - https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b1016b885e7438c4633109d77368d4d&auto=format&fit=crop&w=1651&q=80
  - https://images.unsplash.com/photo-1504626835342-6b01071d182e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=975855d515c9d56352ee3bfe74287f2b&auto=format&fit=crop&w=1651&q=80
  - https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=468a8c18f5d811cf03c654b653b5089e&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1506291318501-948562d765d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71ad8e3b7b4bd210182ed5e5c024903b&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1500402448245-d49c5229c564?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19c590b253f803a7f9b643c59017160&auto=format&fit=crop&w=1650&q=80
---

Here's an example that shows how to add a Lightbox to show each image. 

<!--more-->

As before, to automate the layout, a list of images is stored in a frontmatter variable. The post then loops over that list to output them as thumbnail cards. This is easier than copy-pasting the same HTML for each image.

Some Bootstrap HTML is then included in the page to create the lightbox. This is done using the modal and some simple CSS and JS to make it all work together. To have a look at how this works, look at this page in the [GitHub repo](https://github.com/sfreytag/friday-theme/tree/master/_posts).

Here's the card columns in action. Click each image to open it in a lightbox.

<div class="row">
  {% for img in page.images %}
    <div class="col-4">
      <div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal" data-img="{{ img }}">
        <img class="card-img-top" src="{{ img }}" />
      </div>
    </div>
  {% endfor %}
</div>

(The photos are from [Unsplash](http://www.unsplash.com)!)

<div class="modal fade" id="exampleModal">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img class="modal-img w-100" />
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $(document).ready(function() {
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget)
      var img = button.data('img')
      var modal = $(this)
      modal.find('.modal-img').attr('src', img)
    })
  })
</script>



