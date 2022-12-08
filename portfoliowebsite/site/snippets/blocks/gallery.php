<?php /** @var \Kirby\Cms\Block $block */ ?>
<div class="gallery">
  <?php foreach ($block->images()->toFiles() as $image): ?>
    <?= $image ?>
  <?php endforeach ?>
</div>