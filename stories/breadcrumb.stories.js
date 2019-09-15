import React from 'react';
import Breadcrumb from '../lib/breadcrumb';
import BreadcrumbItem from '../lib/breadcrumb-item';

const BreadcrumbStory = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="https://www.github.com">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="https://www.github.com">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="https://www.github.com">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export { BreadcrumbStory };
