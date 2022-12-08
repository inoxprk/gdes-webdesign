<?= snippet('header') ?>

<article>
  <h1><?= $page->title() ?></h1>

  <?php foreach ($page->text()->toBlocks() as $block): ?>
  <div class="block block-type-<?= $block->type() ?>">
    <?= $block ?>
  </div> 
  <!-- block-type-gallery -->
  <?php endforeach ?>



</article>


</body>

</html>