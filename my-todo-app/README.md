- DOM vs Virtual DOM
  + Virtual DOM : WHAT? WHY? HOW?
- JSX
- Khởi tạo dự án
- Functional complonent(stateless) vs class component (statefull)
- Props vs State
- Chia tách components

- Life Circle (Class component)
  + Mounting
    - componentWillMount()
    - render()
    - componentDidMount()
  + Updating
    - componentWillReceiveProps()
    - shouldComponentUpdate()
    - componentWillUpdate()
    - render()
    - componentDidUpdate()
  + Unmounting
    - componentWillUnmount()

- React Hooks:
  const [state, setState] = useState({
    count: 0,
    name:'SonDuong'
  });

+, 1 + 1 - 2 = 0
+, "1" + "1" - "2" = 11 - 2 = 9
+, "1" - "1" + 2 = 2
+, "1" - "1" + "2" = "02"
