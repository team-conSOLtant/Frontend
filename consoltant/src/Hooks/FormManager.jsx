import { useEffect, useReducer } from "react";
import { getCareer } from "../apis/Career";
import { getAwards } from "../apis/Award";
import { getCertifications } from "../apis/Certification";

// 초기 상태 정의
const initialstate = (itemList_, nullForm) => {
  return {
    formList: [nullForm],
    itemList: itemList_,
    lastKeyNum: 1,
  };
};
// 액션 타입 정의
const ADD_FORM = "ADD_FORM";
const DELETE_FORM = "DELETE_FORM";
const SUBMIT_FORM = "SUBMIT_FORM";
const UPDATE_FORM = "UPDATE_FORM";

// Reducer 함수 정의
const formReducer = (state, action) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        formList: [
          ...state.formList,
          {
            key: state.lastKeyNum,
            company: null,
            positionLevel: null,
            startDate: null,
            endDate: null,
          },
        ],
        lastKeyNum: state.lastKeyNum + 1,
      };
    case DELETE_FORM:
      return {
        ...state,
        formList: state.formList.filter(
          (form) => form.key !== action.payload.key
        ),
      };
    case UPDATE_FORM:
      return {
        ...state,
        formList: state.formList.map((form) => {
          if (form.key === action.payload.key) {
            // 기존 form 객체의 필드들을 직접 업데이트
            console.log("!!!!!!!!!!!!!!!!!!!!!!!", form.key);
            console.log("updates", action.payload);
            Object.assign(form, action.payload.updates);
            console.log("form", form);
          }
          return form;
        }),
      };
    case SUBMIT_FORM:
      // SUBMIT_FORM 액션에서 form을 itemList로 추가
      return {
        ...state,
        itemList: [
          ...state.itemList,
          action.payload.selectedForm, // 제출된 form을 itemList에 추가
        ],
      };
    default:
      return state;
  }
};

// Custom Hook 정의
const useFormManager = (itemList, nullForm) => {
  const [state, dispatch] = useReducer(
    formReducer,
    initialstate(itemList, nullForm)
  );
  console.log("state", state);

  const addForm = () => dispatch({ type: ADD_FORM });
  const deleteForm = (key) => dispatch({ type: DELETE_FORM, payload: { key } });
  const updateForm = (key, updates) => {
    dispatch({ type: UPDATE_FORM, payload: { key, updates } });
  };

  const submitForm = (key) => {
    const selectedForm = state.formList.find((form) => form.key === key);
    console.log("selectedForm", selectedForm);
    if (selectedForm) {
      // submit 후에 itemList에 추가
      dispatch({
        type: SUBMIT_FORM,
        payload: { selectedForm },
      });
    }
  };
  return { state, addForm, deleteForm, updateForm, submitForm };
};

export default useFormManager;
