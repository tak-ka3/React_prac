let dom = document.querySelector('#root')

let element = React.createElement(
  'div', {}, [
    React.createElement(
      'h2', {}, 'Hello!'
    ),
    React.createElement(
      'h4', {className: 'alert alert-primary'}, 'React sample page'
    ),
    React.createElement(
      'ul', {className: 'list-group'}, [
        React.createElement(
          'li', {className: 'list-group-item bg-primary'}, 'First item.'
        ),
        React.createElement(
          'li', {className: 'list-group-item bg-secondary'}, 'Second item.'
        ),
        React.createElement(
          'li', {className: 'list-group-item bg-warning'}, 'Third item.'
        ),
      ]
    )
  ]
)

ReactDOM.render(element, dom);