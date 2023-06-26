# <b> RESTful api</b><hr/>

## <span style="background-color:#FFFFF0"><b>RESTful api란?</b></span>

<span style="font-size: 25px">웹 개발에서 클라이언트와 서버 간의 통신을 위한 아키텍처 스타일이고
클라이언트는 서버에게 요청을 보내고, 서버는 그에 대한 응답을 제공</span></br></br>

## <span style="background-color:#FFFFF0"><b>REST란?</b></span>

<span style="font-size: 26px">REST(Representational State Transfer)는 자원과 표현의 개념을 기반으로 하는 아키텍처</span></br></br>

## <span style="background-color:#FFFFF0"><b>API란?</b></span>

<span style="font-size: 26px">소프트웨어 간의 상호작용을 위한 인터페이스를 제공하고 다른 애플리케이션 또는 서비스와 상호작용하고 데이터를 주고받을 수 있게 해준다.</span></br></br>

## **RESTful api의 원칙**

<span style="font-size: 25px">

    1. 클라이언트/서버 구조: 클라이언트와 서버는 독립적으로 개발되고 관리되어야 한다.

    2. 상태 없음: 서버는 클라이언트의 상태를 관리하지 않으며, 각 요청은 완전한 정보를 포함해야 한다.

    3. 자원 : API는 고유한 식별자를 가진 자원에 접근하고 조작한다.

    4. 표현 : 자원은 다양한 형식으로 표현될 수 있으며, 클라이언트는 선호하는 표현 형식을 지정할 수 있다.

    5. 통일된 인터페이스 : 통일된 인터페이스를 사용하여 자원을 조작하며, 주요 요소로는 HTTP 메서드, URI, 상태 코드 등이 있다.

    6. 캐시 가능 : 클라이언트는 서버의 응답을 캐시할 수 있어 성능을 개선할 수 있다.

</span>

## <span style="background-color:#FFFFF0"><b>RESTful API를 사용해야 하는 이유</b></span>

<span style="font-size: 25px">

    1. 간결하고 직관적인 디자인
      - 자원을 기반으로 간결하고 직관적인 디자인을 제공 -> API 사용자는 API 엔드포인트와 요청 방법을 쉽게 이해하고 예측할 수 있다.

    2. 확장성과 유연성
      - 자원과 HTTP 메서드를 이용해 작동하기 때문에, 다양한 자원과 작업에 대해 확장성과 유연성을 제공
      - 새로운 기능이나 엔드포인트를 추가할 때도 기존 API를 변경할 필요가 없어서 유지보수와 확장이 용이

    3. HTTP의 기능 활용 
      - HTTP 프로토콜을 기반으로 작동하기 때문에, HTTP가 제공하는 다양한 기능과 상태 코드를 활용 -> 인증, 캐싱, 쿠키, 세션 등의 기능을 활용하고 웹 표준에 따라 작업할 수 있다.
</span>

## <span style="background-color:#FFFFF0"><b>응답 형식과 상태 코드</b></span>

<span style="font-size: 24px">RESTful API에서는 응답 형식과 상태 코드를 통해 클라이언트에게 결과를 전달한다.</span></br></br>

<span style="font-size: 24px">✔ **응답 형식**은 클라이언트가 받고자 하는 데이터의 형식을 의미하며, 일반적으로 JSON 형식이 많이 사용됨</span></br></br>


<span style="font-size: 24px">✔ **상태 코드**는 요청의 처리 결과를 나타내는 숫자로, 성공, 실패, 리다이렉션 등 다양한 상태를 나타낼 수 있다. </span></br></br>

## <span style="background-color:#FFFFF0"><b>RESTful API의 중요성</b></span>
<span style="font-size: 25px">

    - RESTful API는 다양한 플랫폼과 언어 간의 통신을 용이하게 하고, 개발 및 유지보수의 효율성을 높여준다.

    - 확장성과 유연성을 제공하여 시스템을 쉽게 확장하고 변경할 수 있도록 한다.

</span>


## <span style="background-color:#FFFFF0"><b>Swagger</b></span>

<span style="font-size: 23px"> ✔  API를 설계, 빌드, 문서화 및 소비하기 위한 오픈 소스 프레임워크</span></br></br>
<span style="font-size: 23px"> ✔  RESTful API를 설명하는 형식과 도구 세트로 구성되어 있으며, API에 대한 자동화된 문서 생성, 클라이언트 코드 생성, API 테스트 및 디버깅 등 다양한 기능을 제공</span></br></br>

## <span style="background-color:#FFFFF0"><b>Swagger를 사용하는 이유</b></span>
<span style="font-size: 25px">

    1. 자동화된 API 문서 생성
       API 코드에서 자동으로 문서를 생성 -> API의 설명, 매개 변수, 응답 형식 등을 Swagger 스펙에 작성하고, 이를 통해 문서를 자동으로 생성할 수 있다.

    2. 통일된 API 문서 형식과 가독성
        일관된 API 문서 형식을 제공하여 문서의 가독성을 향상 -> API 문서에는 자세한 설명, 예제 요청 및 응답, 매개 변수 및 경로에 대한 정보가 포함되어 있어 개발자들이 쉽게 API를 이해할 수 있다.

    3. 클라이언트 코드 생성
        클라이언트 코드를 자동으로 생성할 수 있는 기능을 제공 -> API를 사용하기 위한 클라이언트 코드를 더욱 쉽게 작성할 수 있다.

</span>
