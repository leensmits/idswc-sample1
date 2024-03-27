# Sandbox - Ids Web Components with Angular

Based upon [enterprise-wc-example/angular-ids-wc](https://github.com/infor-design/enterprise-wc-examples)

- I removed all the example components
- Added a masthead
- Added a module-nav with some sample components
- Added these components to the routing

## Work arounds
- The height of module-nav is adapted: `::ng-deep ids-module-nav-bar { top: 40px; }`

## Known issues
(maybe) due my lack of (Angular/Web dev.) knowledge
- If you put this under a yourhost/subfolder, it will not work.
