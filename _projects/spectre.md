---
layout: publication
title: Visual Speech-Aware Perceptual 3D Facial Expression Reconstruction from Videos
description: 
img: assets/img/cover2.drawio.png
importance: 1
category: work
---
<style type="text/css">
  .post-title {
    text-align: center;
    font-family: "Google Sans", sans-serif;
    color: #363636;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.125;
  }
  .publication-authors
  {
    margin-top: 15px;
    text-align: center;
    font-family: "Google Sans", sans-serif;
  }
  h3 {
    font-family: "Google Sans", sans-serif;
    color: #363636;
    font-weight: 400;
    line-height: 1.125;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn {
    /*color: white;*/
    padding: .5rem 1.5rem;
    text-transform: none;
    font-size: 17px;
  }
  .btn span {
    /*color:white;*/
  }

  .btn:hover {
    text-decoration: underline;
  }

  .btn.btn-youtube {
    /*background: #FF3636 !important;*/
  }

  .publication-icons {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .abstract {
    text-align: justify;
  }

</style>

<div class="publication-authors">
  <span class="author-block">
    <a href="https://filby89.github.io">Panagiotis P. Filntisis</a><sup>1</sup>,</span>
  <span class="author-block">
    <a href="https://georgeretsi.github.io">George Retsinas</a><sup>1</sup>,</span>
  <span class="author-block">
    <a href="https://scholar.google.com/citations?user=PngS31QAAAAJ">Foivos Paraperas-Papantoniou</a><sup>2</sup>,
  </span>
  <span class="author-block">
    <a href="https://www.ilsp.gr/en/members/katsamanis-athanasios-nassos/">Athanasios Katsamanis</a><sup>3</sup>,
  </span>
  <span class="author-block">
    <a href="https://users.ics.forth.gr/~troussos/">Anastassios Roussos</a><sup>4</sup>,
  </span>
  <span class="author-block">
    <a href="https://robotics.ntua.gr/members/maragos/">Petros Maragos</a><sup>1</sup>
  </span>
</div>

<div class="row publication-icons">
  <div class="col-sm" align=center>
        <!-- PDF Link. -->
        <!-- Video Link. -->
        <a class="btn btn-dark btn-rounded" href="#!" role="button">
          <i class="fa fa-file-pdf"></i>
          Paper
        </a>
        <a class="btn btn-dark" href="#!" role="button">
          <i class="ai ai-arxiv"></i>
          arXiv
        </a>
        <!-- Video Link. -->
        <a class="btn btn-dark btn-youtube" style="background-color: #ed302f; !important" href="https://youtu.be/P1kqrxWNizI" role="button">
          <i class="fab fa-youtube"></i>
          Video
        </a>
        <!-- Code Link. -->
        <!-- Github -->
        <a class="btn btn-dark" href="https://github.com/filby89/spectre" role="button">
          <i class="fab fa-github"></i>
          Code
        </a>
  </div>
</div>

<div class="alert alert-info">
<b>tl;dr:</b> we optimize 3D facial reconstruction in videos by focusing on the lip formations and mouth movements, using a <b>lipreading</b> loss
</div>

<div class="row">
    <div class="col-sm">
        {% include figure.html path="assets/img/projects/cover2.drawio.png" title="Cover image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Our method performs visual-speech aware 3D reconstruction so that speech perception from the original footage is preserved in the reconstructed talking head. On the left we include the word/phrase being said for each example.
</div>


<div class="row">
  <div class="col-sm">
    <h3>Teaser Video</h3>
  </div>
</div>

<div class="row justify-content-sm-center" align="center">
    <div class="col-sm">
<iframe width="560" height="315" src="https://www.youtube.com/embed/P1kqrxWNizI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>




<div class="row">
  <div class="col-sm">
    <h3>Abstract</h3>
  </div>
</div>

<p class="abstract">
The recent state of the art on monocular 3D face reconstruction from image data has made some impressive advancements, thanks to the advent of Deep Learning. However, it has mostly focused on input coming from a single RGB image, overlooking the following important factors: 
a) Nowadays, the vast majority of facial image data of interest do not originate from single images but rather from videos, which contain rich dynamic information. b) Furthermore, these videos typically capture individuals in some form of verbal communication (public talks, teleconferences, audiovisual human-computer interactions, interviews, monologues/dialogues in movies, etc). 
When existing 3D face reconstruction methods are applied in such videos, the artifacts in the reconstruction of the shape and motion of the mouth area are often severe, since they do not match well with the speech audio. 

To overcome the aforementioned limitations, we present the first method for visual speech-aware perceptual reconstruction of 3D mouth expressions. We do this by proposing a "lipread" loss, which guides the fitting process so that the elicited perception from the 3D reconstructed talking head resembles that of the original video footage. We demonstrate that, interestingly, the lipread loss is better suited for 3D reconstruction of mouth movements compared to traditional landmark losses, and even direct 3D supervision.  Furthermore, the devised method does not rely on any text transcriptions or corresponding audio, rendering it ideal for training in unlabeled datasets. We verify the efficiency of our method through exhaustive objective evaluations on three large-scale datasets, as well as subjective evaluation with two web-based user studies.
</p>


<!-- <h3> Bibtex </h3> -->
<!-- 
<div class="publications">
{% bibliography --template bibtex_only -q @*[key=filntisis2022visual]* %}
</div> -->