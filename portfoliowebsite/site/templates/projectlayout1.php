<?= snippet('header') ?>

<article>
  <h1><?= $page->title() ?></h1>

  <?php foreach ($page->contents()->toBlocks() as $block): ?>
<div class="block block-type-<?= $block->type() ?>">
  <?php snippet('blocks/projectlayout1/' . $block->type(), [
    'block' => $block,
    'theme' => 'dark'
  ]) ?>
</div>
<?php endforeach ?>

</article>


</body>

</html>