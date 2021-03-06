export const GET_USER_INFO_REQUEST = "UserInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "UserInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "UserInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}

export function getUserInfo() {
  return function(dispatch) {
    dispatch(getUserInfoRequest());

    return fetch('http://localhost:3000/api/user.json')
      .then((response => {
        return response.json()
      }))
      .then((json) => {
        dispatch(getUserInfoSuccess(json))
      }).catch(
        () => {
          dispatch(getUserInfoFail());
        }
      )
  }
}