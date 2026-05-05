---
layout: publication
title: MOCHI - Registration-Free Learnable Multi-View Capture of Faces in Dense Semantic Correspondence
description: Registration-free multi-view 3D face capture in dense semantic correspondence
img: assets/img/projects/mochi/teaser.png
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
  .publication-authors {
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
    margin-bottom: 25px;
  }
  .btn {
    padding: .5rem 1.5rem;
    text-transform: none;
    font-size: 17px;
  }
  .btn:hover {
    text-decoration: underline;
  }
  .btn.btn-youtube {
    background-color: #ed302f !important;
  }
  .btn.btn-coming-soon {
    background-color: #6c757d !important;
    border-color: #6c757d !important;
    color: #fff !important;
    cursor: not-allowed;
    pointer-events: none;
  }
  .publication-icons {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .abstract {
    text-align: justify;
  }
  .publication-affiliations {
    margin-top: 12px;
    text-align: center;
    font-size: 0.92rem;
    line-height: 1.45;
    color: #5f6368;
  }
  .publication-affiliations .affil-line {
    margin: 2px 0;
  }
  .publication-affiliations sup {
    font-weight: 600;
    color: #3c4043;
  }
  .teaser-video {
    max-width: 960px;
    margin: 0 auto;
  }
  .teaser-video iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
  }
</style>

<div class="publication-authors">
  <span class="author-block">
    <a href="https://filby89.github.io">Panagiotis P. Filntisis</a><sup>1,3,4,†</sup>,</span>
  <span class="author-block">
    <a href="https://georgeretsi.github.io">George Retsinas</a><sup>1</sup>,</span>
  <span class="author-block">
    <a href="https://radekd91.github.io">Radek Danecek</a><sup>4</sup>,</span>
  <span class="author-block">
    <a href="https://vanessik.github.io">Vanessa Sklyarova</a><sup>4,5</sup>,</span>
  <br/>
  <span class="author-block">
    <a href="https://robotics.ntua.gr/members/maragos/">Petros Maragos</a><sup>1,2,3,†</sup>,</span>
  <span class="author-block">
    <a href="https://sites.google.com/site/bolkartt/">Timo Bolkart</a><sup>6,*</sup>
  </span>
</div>
<div class="publication-affiliations">
  <div class="affil-line"><sup>1</sup> Institute of Robotics, Athena RC, Greece &nbsp;&middot;&nbsp; <sup>2</sup> School of ECE, NTUA, Greece</div>
  <div class="affil-line"><sup>3</sup> HERON, Athens, Greece &nbsp;&middot;&nbsp; <sup>4</sup> Max Planck Institute for Intelligent Systems, Tubingen, Germany</div>
  <div class="affil-line"><sup>5</sup> ETH Zurich, Switzerland &nbsp;&middot;&nbsp; <sup>6</sup> Google, Switzerland</div>
</div>

<div class="row publication-icons">
  <div class="col-sm" align=center>
    <a class="btn btn-dark btn-rounded" href="https://arxiv.org/pdf/2605.01450.pdf" role="button">
      <i class="fa fa-file-pdf"></i>
      Paper
    </a>
    <a class="btn btn-dark" href="https://arxiv.org/abs/2605.01450" role="button">
      <i class="ai ai-arxiv"></i>
      arXiv
    </a>
    <a class="btn btn-dark btn-youtube" href="https://youtu.be/-dicD0PMbC8" role="button">
      <i class="fab fa-youtube"></i>
      Video
    </a>
    <a class="btn btn-coming-soon" role="button" aria-disabled="true">
      <i class="fab fa-github"></i>
      Code (coming soon)
    </a>
  </div>
</div>

<div class="alert alert-info">
  <b>tl;dr:</b> MOCHI learns to output <a href="https://flame.is.tue.mpg.de">FLAME</a> registrations from calibrated multi-view images, <b>without needing registrations during training</b>. An optional test-time optimization step further improves fidelity.
</div>

<div class="row">
  <div class="col-sm">
    <h3>Teaser</h3>
  </div>
</div>

<div class="row">
  <div class="col-sm">
    {% include figure.html path="assets/img/projects/mochi/teaser.png" title="MOCHI teaser" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Given calibrated multi-view images, MOCHI predicts a canonical FLAME-topology mesh without requiring precomputed registrations during training.
</div>

<div class="row">
  <div class="col-sm">
    <h3>Video</h3>
  </div>
</div>

<div class="row justify-content-sm-center" align="center">
  <div class="col-sm">
    <div class="teaser-video">
      <iframe src="https://www.youtube.com/embed/-dicD0PMbC8" title="MOCHI teaser video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm">
    <h3>Abstract</h3>
  </div>
</div>

<p class="abstract">
Recent frameworks like ToFu and TEMPEH provide an automated alternative to classical registration pipelines by predicting 3D meshes in dense semantic correspondence directly from calibrated multi-view images.
However, these learning-based methods still rely on registration-heavy supervision pipelines.
MOCHI addresses this by training directly on raw scans without requiring registered training data.
It enforces topological consistency through a pseudo-linear inverse kinematic solver and uses dense semantic guidance from a 2D keypoint predictor trained only on synthetic data.
We further replace unstable point-to-surface supervision with pointmap- and normal-based losses for smoother gradients and improved fidelity.
An optional test-time optimization stage refines each sample in a few dozen iterations, bridging feed-forward efficiency and iterative precision.
</p>


<div class="publications">
{% bibliography --template bibtex_only -q @*[key=filntisis2026mochi]* %}
</div>
