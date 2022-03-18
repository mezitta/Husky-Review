Workaround for NodeJS 10.19.0 on Ubuntu 20.04 LTS.[^1]
[^1]: https://stackoverflow.com/a/71231992
Run once after npm clean-install.
```
patch -i node_modules+whatwg-url+lib+encoding.js.patch node_modules/whatwg-url/lib/encoding.js
```
