webpackHotUpdate(0,{

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof2(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(811);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _typeof(obj) {\n  return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n}\n\nvar TableData = function TableData(props) {\n  var item = props.item;\n\n  var _loop = function _loop(i) {\n    return {\n      v: item.map(function (val, index) {\n        var col = undefined;\n\n        var item1PlusOne = val[2] + 1;\n        var item1PlusItem2 = val[2] + val[i + 1][2];\n        var item2MinusItem1 = val[i + 1][2] - val[i][2];\n\n        // sets colspan\n        if (item1PlusOne !== item1PlusItem2) {\n          col = item2MinusItem1 !== 0 ? item2MinusItem1 : null;\n          console.log(val);\n          console.log(item[i]);\n        };\n\n        return _react2.default.createElement('td', {\n          colSpan: col,\n          key: index,\n          'data-kitid': 'tabledata-[' + props.index + ', ' + index + ']-' + props.kitid }, val[1]);\n      })\n    };\n  };\n\n  for (var i = 0; i < item.length; i++) {\n    var _ret = _loop(i);\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n  }\n};\n\nTableData.propTypes = {\n  item: _react2.default.PropTypes.array,\n  index: _react2.default.PropTypes.number,\n  kitid: _react2.default.PropTypes.string\n};\n\nexports.default = TableData;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtZGF0YS5qcz9lNThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLEdBQUcsUUFBUSxVQUFVLEdBQUcsMENBQUgsR0FBRyxFQUFDO0NBQUU7O0FBRTVILElBQUksU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QyxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixNQUFJLEtBQUssR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDNUIsV0FBTztBQUNMLE9BQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxZQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7O0FBRXBCLFlBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsWUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsWUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFHL0MsWUFBSSxZQUFZLEtBQUssY0FBYyxFQUFFO0FBQ25DLGFBQUcsR0FBRyxlQUFlLEtBQUssQ0FBQyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDckQsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQzs7QUFFRixlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNsQyxJQUFJLEVBQ0o7QUFDRSxpQkFBTyxFQUFFLEdBQUc7QUFDWixhQUFHLEVBQUUsS0FBSztBQUNWLHNCQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNqRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztPQUNILENBQUM7S0FDSCxDQUFDO0dBQ0gsQ0FBQzs7QUFFRixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXBCLFFBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQzdGO0NBQ0YsQ0FBQzs7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3JDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0NBQ3hDLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTIiwiZmlsZSI6Ijk2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG52YXIgVGFibGVEYXRhID0gZnVuY3Rpb24gVGFibGVEYXRhKHByb3BzKSB7XG4gIHZhciBpdGVtID0gcHJvcHMuaXRlbTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHY6IGl0ZW0ubWFwKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBjb2wgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdmFyIGl0ZW0xUGx1c09uZSA9IHZhbFsyXSArIDE7XG4gICAgICAgIHZhciBpdGVtMVBsdXNJdGVtMiA9IHZhbFsyXSArIHZhbFtpICsgMV1bMl07XG4gICAgICAgIHZhciBpdGVtMk1pbnVzSXRlbTEgPSB2YWxbaSArIDFdWzJdIC0gdmFsW2ldWzJdO1xuXG4gICAgICAgIC8vIHNldHMgY29sc3BhblxuICAgICAgICBpZiAoaXRlbTFQbHVzT25lICE9PSBpdGVtMVBsdXNJdGVtMikge1xuICAgICAgICAgIGNvbCA9IGl0ZW0yTWludXNJdGVtMSAhPT0gMCA/IGl0ZW0yTWludXNJdGVtMSA6IG51bGw7XG4gICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtW2ldKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xTcGFuOiBjb2wsXG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgJ2RhdGEta2l0aWQnOiAndGFibGVkYXRhLVsnICsgcHJvcHMuaW5kZXggKyAnLCAnICsgaW5kZXggKyAnXS0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgICAgICB2YWxbMV1cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3JldCA9IF9sb29wKGkpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG59O1xuXG5UYWJsZURhdGEucHJvcFR5cGVzID0ge1xuICBpdGVtOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LFxuICBpbmRleDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGVEYXRhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUvbGliL3RhYmxlLWRhdGEuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})