# React.js & Next.js 入門

- this.propsはコンポーネントを使うときに初期化で使うパラメータ(例えば`<App msg = "Hello App!"/>`という感じ)
- 一方で、this.stateはそのコンポーネント内で初期化したり、変化させたりするもの
- なぜ`this.doAction = this.doAction.bind(this)`が必要なのか？
- state自体の値は直接操作してはいけない、this.setStateなどにより操作するのが一般的
- renderの外では、レンダリングする必要のない、つまり変化がないものについて記述し、renderの中ではレンダリングする必要のあるもの、つまり変化があるものを記述する。
- formを送る時など、`event.preventDefault()`をすると、formの送り先が指定されていない時に現在のURLに送るため一回ページがリロードされるというデフォルトの動作を防げる、つまりformを送った時にページが初期化されることを防ぐためにformの送信を行わない
- 下の方でstyleを指定する時は、`<style>{``}</style>`という書式で書く（また、その際、普通のh1, inputなどのタグ名は、`h1{}`で、class名は`.form-control`のようにドットをつける）
- htmleForはlabelに付与することで、同じ内容のid属性を持つ要素と関連付けれれる(p210)
- 関数コンポーネントで引数を渡すときは、`props.message`　を関数側で、`message`だけを呼び出し側で書く
- useEffectは、引数に何も指定しないと最初はreturnの後にも再び実行されるので、合計2回実行される
- (p239)useEffectの中にsetMsg(res)のようなものを入れると、レンダリングされる度にuseEffectは呼ばれるので、無限にuseEffectが呼ばれるようになる


### 上手くいかないシリーズ
- .jsxでやると通っても、.tsxで通らないことも多い
- P187のコードが上手くいかない
- Bootstrapの適用が上手くいかない