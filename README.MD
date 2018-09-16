# Emotion React Bootstrap

A React component library for bootstrap using the [**emotion-js**](Emotion-JS framework)

## Getting Started

Install emotion-react-bootstrap and Bootstrap from NPM. emotion-react-bootstrap does not include Bootstrap CSS so this needs to be installed as well:

```

npm install --save bootstrap@4.1.1
npm install --save @farvisionllc/emotion-react-bootstrap

```

Import Bootstrap CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```

Import required emotion-react-bootstrap components within ```src/App.js``` file or your custom component files:

```js
import { Button } from '@farvisionllc/emotion-react-bootstrap';
```

Now you are ready to use the imported emotion-react-bootstrap components within your component hierarchy defined in the render
method.

### Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080/](http://localhost:8080/) with webpack dev server:

```sh
npm start
```

Run tests & coverage report:

```sh
npm test
```

Watch tests:

```sh
npm run test-watch
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Emotion JS](https://github.com/emotion-js/emotion) - style as a function of state [https://emotion.sh/](https://emotion.sh/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Byron** - *Initial work* - [bwarner](https://github.com/bwarner)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
