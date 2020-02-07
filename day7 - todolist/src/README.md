html 구조
BODY - body
TITLE - h1
FORM - form
INPUT - input
CLEAR - button
PENDING - h2
FINISHED - h2

컨트롤러
inputForm - 쿼리 폼
inputField - 쿼리 인풋
pendingTodos - 쿼리 펜딩 ul
finishedTodos - 쿼리 펜딩 ul
  
 TODOS - 로컬 펜딩스
TODOS_FINISHED - 로컬 피니쉬드

    todos - 배열 초기화[]
    finTodos - 배열 초기화[]

    id - todos.length+1

❓전체 로케이션리로드로 편성됨 // 페인트로 최대한 막아보기.

❓로드스토리지 - 첫 로딩시 로컬 확인/ 없으면 []
-> 현재 둘로 나뉘어 있음 // 리팩토링 하나로.

->안에 페인트 있음.
paintTodos(id,text)로 통합

❓로컬스토리지 세이브 - 두 개로 나뉘어 있음. // 리팩토링

❓delete - 두개로 나뉘어 있음. // 리팩토링

❓모드 체인지 - 두개로 나뉘어 있음. // 리팩토링

❓페인트 - 두개로 나뉘어 있음. // 리팩토링

❓전체 클리어 - 펑션 리팩토링//
