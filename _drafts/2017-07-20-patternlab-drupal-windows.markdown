---
layout: post
title:  "PatternLab for Drupal on Windows"
date:   2017-07-20 11:30:00 -0400
categories: drupal
---

https://github.com/pattern-lab/edition-php-drupal-standard

composer create-project pattern-lab/edition-drupal-standard my-patternlab

open my-patternlab/config.yml in an editor

Change line 28 to relative path:

```
styleguideKitPath: 'vendor\pattern-lab\styleguidekit-twig-default'
```

Save the file

git clone https://github.com/pattern-lab/starterkit-twig-demo

cp -r startkit-twig-demo/dist/* my-patternlab/source/

cd my-patternlab

composer start

go to https://localhost:8080 to see your new PatternLab setup
