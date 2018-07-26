import React from 'react';
import 'holderjs';
import { Media } from '../index';

const Example1 = () => (
  <Media>
    <Media left href="#">
      <Media
        object
        data-src="holder.js/64x64"
        alt="Generic placeholder image"
      />
    </Media>
    <Media body>
      <Media heading>
Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
);

const Example2 = () => (
  <Media>
    <Media left href="#">
      <Media
        object
        data-src="holder.js/64x64"
        alt="Generic placeholder image"
      />
    </Media>
    <Media body>
      <Media heading>
Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
      <Media>
        <Media left href="#">
          <Media
            object
            data-src="holder.js/64x64"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>
Nested media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </Media>
  </Media>
);
const Example3 = () => (
  <div>
    <Media>
      <Media left top href="#">
        <Media
          object
          data-src="holder.js/64x64"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>
Top aligned media
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    <Media className="mt-1">
      <Media left middle href="#">
        <Media
          object
          data-src="holder.js/64x64"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>
Middle aligned media
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    <Media className="mt-1">
      <Media left bottom href="#">
        <Media
          object
          data-src="holder.js/64x64"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>
Bottom aligned media
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  </div>
);
const Example4 = () => (
  <Media list>
    <Media tag="li">
      <Media left href="#">
        <Media
          object
          data-src="holder.js/64x64"
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>
Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        <Media>
          <Media left href="#">
            <Media
              object
              data-src="holder.js/64x64"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body>
            <Media heading>
Nested media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>
Nested media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
          </Media>
        </Media>
        <Media>
          <Media left href="#">
            <Media
              object
              data-src="holder.js/64x64"
              alt="Generic placeholder image"
            />
          </Media>
          <Media body>
            <Media heading>
Nested media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    </Media>
    <Media tag="li">
      <Media body>
        <Media heading>
Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </Media>
      <Media right href="#">
        <Media
          object
          data-src="holder.js/64x64"
          alt="Generic placeholder image"
        />
      </Media>
    </Media>
  </Media>
);

export default [
  { name: 'Media object', story: Example1 },
  { name: 'Nesting', story: Example2 },
  { name: 'Alignment', story: Example3 },
  { name: 'Media list', story: () => <Example4 /> },
];
