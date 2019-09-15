import React from 'react';
import Pagination from '../lib/pagination';
import PaginationItem from '../lib/pagination-item';
import PaginationLink from '../lib/pagination-link';

const PaginationStory = () => (
  <div>
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  </div>
);

const PaginationActiveStory = () => (
  <div>
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  </div>
);

const PaginationDisabledStory = () => (
  <div>
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem disabled>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  </div>
);

const PaginationLargeStory = () => (
  <div>
    <Pagination size="Lg" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem diabled>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  </div>
);

const PaginationSmallStory = () => (
  <div>
    <Pagination size="Sm" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem diabled>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  </div>
);

export {
  PaginationStory,
  PaginationActiveStory,
  PaginationDisabledStory,
  PaginationLargeStory,
  PaginationSmallStory,
};
