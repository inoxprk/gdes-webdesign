<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $site->title() ?> | <?= $page->title() ?></title>
  <?= css('assets/css/reset.css') ?>
  <?= css('assets/css/header.css') ?>
  <?= css('assets/css/common.css') ?>
  <?= css('@auto') ?>
  <?= js(['assets/js/jquery-3.6.1.min.js','assets/js/site.js']) ?>
  <link rel="icon" type="image/x-icon" href="<?= url('favicon.ico') ?>">
</head>

<body>

  <!-- header -->
  <header class="header cfixed">
    <div class="container">
      <!-- header logo -->
      <h1 class="logo"><a href="<?= $site->url() ?>"><?= $site->LogoTitle() ?></a></h1>
      <!-- navigation menu -->
      <nav>
        <ul class="gnb">
          <?php foreach ($site->children()->listed() as $item): ?>
          <li><a href="<?= $item->url() ?>"><?= $item->title() ?></a></li>
          <?php endforeach ?>
          <!-- social media & email links -->
          <li><?php snippet('social') ?></li>
        </ul>
      </nav>
      <!-- hamburger menu for mobile -->
      <span class="menu-toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <!-- background shade behind menu for mobile -->
      <div class="shade"></div>
    </div>
  </header>