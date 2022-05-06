# ChargeOver.js Vue Sample

> ❗️ Notice
> 
> This project is a sample only and is NOT accepting pull requests!
> Issues should only be used for questions.

This project exists to provide a sample of how to use ChargeOver.js with react.

## Quick demo

```shell
$ git clone https://github.com/chargeover/chargeover-js-vue-demo.git
$ cd chargeover-js-vue-demo
# Change YOUR_INSTANCE and YOUR_TOKEN to match your credentials
$ printf "VUE_APP_CHARGEOVERJS_INSTANCE=%s\nVUE_APP_CHARGEOVERJS_TOKEN=%s" >> .env YOUR_INSTANCE YOUR_TOKEN
$ yarn install
$ yarn serve
```

## The important parts

Most of the code you will need can be found in `./src/plugins/chargeover.js`. This module is a wrapper
around the library which contains all the code needed to load / instantiate the module as well as a 
sample of using it to create a customer.

This example does show how you can use this library with ENV variables to store your credentials.

To use it simply create your `.env` file as per the quick start guide above. After that you need to
import it into either your top level component(usually App.vue) to make it available globally or you
can import it into a specific component, so you only load it on pages where you load that component.

```javascript
import ChargeOverJS from './plugins/chargeover'
```

From here all that's left is to call the `load()` method inside of the `mounted()` life cycle hook.
Make sure you use the mounted hook and **NOT** the created hook.

```javascript
mounted() {
  ChargeOverJS.load(process.env.VUE_APP_CHARGEOVERJS_INSTANCE, process.env.VUE_APP_CHARGEOVERJS_TOKEN);
},
```

Now that you know how to use the wrapper, modify it to fit your needs for any library methods you want
to use!

## Resources
- [ChargeOverJS Documentation](https://developer.chargeover.com/apidocs/js/)
