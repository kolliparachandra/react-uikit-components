'use strict';

import React from 'react';
import Codeblock from 'react-uikit-codeblock';
import Table from '../components/react-uikit-table';
import Note from 'react-uikit-note';

const items = [
  {
    Name: 'OTIS',
    score: 39,
    height: 5.6
  }, {
    name: 'jocelyn',
    score: 65,
    height: 4.8
  }, {
    name: 'Ania',
    score: -50,
    height: 6.10
  }
];


const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];


const TableDoc = (props) => (
  <div>

    <section>
      <h1>Table</h1>
      <p className='uk-article-lead'>
        Create nice looking tables.
      </p>

      <p>
        <a href='https://github.com/otissv/react-uikit-table'>react-uikit-table</a> on github.
      </p>
    </section>

    <section>
    <h2>Usage</h2>
<Codeblock>
{`<code>npm install react-uikit-table --save;

// ES6
<code>import Table from 'react-uikit-table';

// ES5
<code>var Table = require('react-uikit-table').default;`}
</Codeblock>

    <hr className="uk-article-divider" />

    <h3 className='example'>Example</h3>

    <p>
      Table can be typed declaratively or generated by passing a JSON object to the <code>body</code> prop.
    </p>

    <Note>
      Generated nested properties are not supported at this time.
    </Note>

    <Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>

    <Table caption='Table from Children.'>
      <thead>
        <tr>
          <th className='uk-text-left'>Heading</th>
          <th className='uk-text-left'>Heading</th>
          <th className='uk-text-left'>Heading</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
        <tr>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
          <td className='uk-text-left'>Data</td>
        </tr>
      </tbody>
    </Table>

    <h4 className='code'>Code</h4>
    <Codeblock scroll='text' syntax='xml'>
{
`const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table caption='Generated table.' head={['Heading', 'Heading', 'Heading']} body={data}/>

<Table caption='Table from Children.'>
  <thead>
    <tr>
      <th className='uk-text-left'>Heading</th>
      <th className='uk-text-left'>Heading</th>
      <th className='uk-text-left'>Heading</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
    </tr>
    <tr>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
    </tr>
    <tr>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
      <td className='uk-text-left'>Data</td>
    </tr>
  </tbody>
</Table>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table Head</h2>

    <p>
      Table headings can be set by passing a list of headings to the <code>head=[]</code> prop.<br />
    Alternatively, if the body prop is being used to generate table data, headings can also be
    generated by using the body's JSON keys like so, <code>head='*'</code>.
    </p>
    <Note>
      Keys generate a list of headings in the order they appear. Also the keys will be case insensitive.
    </Note>

    <h3 className='example'>Example</h3>
    <Table
      caption='Headings from body keys.'
      condensed
      head='*' body={items}/>

    <Table
      caption='Headins from prop.'
      condensed
      head={['Heading', 'Heading', 'Heading']}
      body={items}/>

    <h4 className='code'>Code</h4>
    <Codeblock scroll='text' syntax='xml'>
{
`const items = [
  {
    Name: 'OTIS',
    score: 39,
    height: 5.6
  }, {
    name: 'jocelyn',
    score: 65,
    height: 4.8
  }, {
    name: 'Ania',
    score: -50,
    height: 6.10
  }
];
...
<Table
  caption='Headings from body keys.'
  condensed
  head='*' body={items}/>

<Table
  caption='Headins from prop.'
  condensed
  head={['Heading', 'Heading', 'Heading']}
  body={items}/>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table condensed</h2>

    <p>
      To make the table more compact add
      the <code>condensed</code> prop to the Tables props.
    </p>

    <h3 className='example'>Example</h3>
    <Table
      caption='Condensed table'
      condensed
      head={['Heading', 'Heading', 'Heading']}
      body={data}/>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table
  caption='Condensed table'
  condensed
  head={['Heading', 'Heading', 'Heading']}
  body={data}/>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table Hover</h2>

    <p>
      To highlight a row when it is hovered add
      the <code>hover</code> prop to the Tables props.
    </p>

    <h3 className='example'>Example</h3>
    <Table
      caption='Hoverable table'
      hover head={['Heading', 'Heading', 'Heading']}
      body={data}/>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table
  caption='Hoverable table'
  hover head={['Heading', 'Heading', 'Heading']}
  body={data}/>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table striped</h2>

    <p>
      Add zebra-striping to table by adding
      the <code>striped</code> prop to the Tables props.
    </p>

    <h3 className='example'>Example</h3>
      <Table
        caption='Striped table'
        striped
        head={['Heading', 'Heading', 'Heading']}
        body={data}/>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table
  caption='Striped table'
  striped
  head={['Heading', 'Heading', 'Heading']}
  body={data}/>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table sort</h2>

    <p>
      Generated tables can be sorted by passing key names to the <code>sort</code> prop.
      The sort prop can either be a string to sort by a single key or an array of keys
      to sort by  multiple keys.To reverse the sort on a field put '-' in front of the key name.
    </p>

    <h3 className='example'>Example</h3>
    <Table
      caption='Sortable table'
      sort={['name', '-height']}
      head='*'
      body={items}/>

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{
`const items = [
  {
    Name: 'OTIS',
    score: 39,
    height: 5.6
  }, {
    name: 'jocelyn',
    score: 65,
    height: 4.8
  }, {
    name: 'Ania',
    score: -50,
    height: 6.10
  }
];
...
<Table
  caption='Sortable table'
  sort={['name', '-height']}
  head='*'
  body={items}/>
...
`}
    </Codeblock>
  </section>


  <section>
    <h2>Table numbered</h2>

    <p>
      Table row can be numbered by using the <code>numbered</code> prop.
      To add a heading for the numbered column simply asign a string like so, <code>numbered='#'</code>.
    </p>

    <h3 className='example'>Example</h3>
      <Table
        numbered
        condensed
        caption='Numbered table.'
        head={['Heading', 'Heading', 'Heading']}
        body={data}
      />

      <Table
        numbered='#'
        condensed
        caption='Numbered table heading.'
        head={['Heading', 'Heading', 'Heading']}
        body={data}
      />

    <h4 className='code'>Code</h4>
    <Codeblock syntax='xml'>
{`const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
...
<Table
  numbered
  condensed
  caption='Numbered table.'
  head={['Heading', 'Heading', 'Heading']}
  body={data}
/>

<Table
  numbered='#'
  condensed
  caption='Numbered table heading.'
  head={['Heading', 'Heading', 'Heading']}
  body={data}
/>
...`}
    </Codeblock>
  </section>


    <section>
      <h2>Table props</h2>
      <p>
        See base component for additional utility props.
      </p>

      <Table>
        <thead>
          <tr>
            <th className='uk-text-left'>Prop</th>
            <th className='uk-text-left'>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='uk-text-left'>
              body
            </td>
            <td className='uk-text-left'>array</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              caption
            </td>
            <td className='uk-text-left'>string</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              condensed
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              hover
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              head
            </td>
            <td className='uk-text-left'>
              oneOfType<br />
              array or string
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              numbered
            </td>
            <td className='uk-text-left'>
              oneOfType<br />
              bool or string
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              overflow
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              sort
            </td>
            <td className='uk-text-left'>
              oneOfType<br />
              array or string
            </td>
          </tr>
          <tr>
            <td className='uk-text-left'>
              striped
            </td>
            <td className='uk-text-left'>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>

  </div>
);

export default TableDoc;
