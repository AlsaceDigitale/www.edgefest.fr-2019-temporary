EdgeFest website
========

Site is based on [jekyll](http://jekyllrb.com/) and hosted on Github Pages (which disallow any kind of plugins).

`jekyll serve -w --baseurl ''`

Stylesheet is a sass file. DO NOT EDIT directly the css file. Edit the sass file.

For your sass changes to be applied, you must convert the sass file to the css file or you can launch:

`sass --watch css/main.sass:css/main.css`

To batch modify the logos:

```
for file in img/logos/orig/*; do convert $file -resize x70 img/logos/thumb/`basename $file | cut -d'.' -f1`.png; done
```
