// attrebute
// [name |= "value"] : value와 동일하거나 value뒤에 -가 붙는 단어로 시작하는 속성을 가진 요소를 선택
// [name *= "value"] : value를 포함하고 있는 값을 가진 요소를 선택한다.
// [name ~= "value"] : value를 단어로 포함한 값을 가진 요소를 선택
// [name $= "value"] : value로 끝나는 값을 가진 요소를 선택
// [name = "value"] : value와 동일한 값을 가진 요소를 선택
// [name != "value"] : value와 다른 값을 가진 요소를 선택
// [name ^= "value"] : value로 시작하는 요소를 선택
// [name = "value1"][name = "value2"]  : 다중 조건을 체크하여 요소를 선택
// [id ~= 'test']

//[name |= "value"]
// id가 orAttr이고 자손 중에 input 태그의 이름이 inputName이거나 inputName로 되어있는
// 요소들의 value를 ORTEST로 설정한다. inputName에 -를 이용하여 추구한 다른 단어 이외에는 허용하지
//않는다.(inputNames : x, inputName-test : o)
$("#orAttr input[name |= 'inputName']").val("OR TEST");
// [name *= "value"]
//id가 mulAttr이고 자손중에 iput태그의 이름이 inputName이 포함되는 모든 요소들의
//value를 ANDTEST로 설정한다.
//inputNames : o, inputName-test : o, inputName test: o
$("#mulAttr input[name *= 'inputName']").val("AND TEST");
//[name ~= "value"]
//inputName이 단어로 포함되는 모든 요소들의 value를 ~TEST로 설정한다
//inputName : o, inputName test : o, inputName-test : ㅌ, inputName test: x
$("#notAttr1 input[name ~= 'inputName']").val("~ TEST");
//[name != "value"]
//id가notAttr2이고 자손중에 input태그의 이름이 inputName과 정확히 일치 하지 않는
//모든 요소들의 value를 !TEST 로 설정한다.
$("#notAttr2 input[name != 'inputName']").val("! TEST");
// [name $= "value"]
// id가endAttr이고 자손중에 input 태그의 이름이 inputName로 끝나는 모든 요소들의 value 를 
//$test로 설정한다.
//inputName : o, test inputName : o, test inputName :o ,inputName test: x
$("#endAttr input[name $= 'inputName']").val("$ TEST");
// [name $= "value"]
// id가endAttr이고 자손중에 input 태그의 이름이 inputName로 끝나는 모든 요소들의 value 를 
//$test로 설정한다.
//inputName : o, test inputName : x, test inputName :x ,inputName test: o
$("#biginAttr input[name ^= 'inputName']").val("^ TEST");

//아이디로 설정하기
$("#idAttr input[id~= 'test7']").val("ID TEST");