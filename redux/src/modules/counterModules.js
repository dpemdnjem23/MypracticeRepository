//! 액션 타입
const CALCULATE = "counter/CALCULATE"; //계산
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//DUcks 패턴에서는 접두사 ---- / 중복방지

//! 액션 생성 함수

export const calculate = (cal) => ({ type: CALCULATE, cal });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//!모듈 초기 값

const initialValue = {
  number: 0,
};

//! 리듀서

const counter = (value = initialValue, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: value.number + 1,
      };

    case DECREASE:
      return {
        number: value.number - 1,
      };
    default:
      return value;
  }
};

export default counter;

//익스포트는 여러개 내보낼수있고
// 익스포트 디폴트는 단한개만 내보낼수있다