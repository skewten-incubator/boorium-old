![boorium](https://raw.githubusercontent.com/Strat-/boorium/57b22baad6c5faf4fda911ff175e7191b0a28e9f/res/boorium-banner.png)

like picasa, but for boorus
===

*right now it's just a concept*


developing
---

*assuming you're using the git shell or a linux environment*

to get yourself set up, you need 4 console windows, each running the commands:

*note*

you *must* first `cd` into the project root and `npm install -g {sass, jade, watch}`

`watch 'cp -r src/root/* dist/' src/root`
`watch 'cp -r src/js/ dist/' src/js`
`jade --watch src/jade/ --out dist/html/`
`scss --watch src/scss/:dist/css/`