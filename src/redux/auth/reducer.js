import { actionTypes } from './actions';
import { randomAvatarColor } from '../../configs/styleConstant';
import { setCookie } from '../../utils/cookie';

export const initialState = {
  accessToken: null,
  userId: null,
  ssoUserId: null,
  verifying: false,
  userInfo: null,
  isLogout: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.VERIFY_TOKEN:
      return { ...state, verifying: true };
    case actionTypes.IS_LOGOUT:
      return {
        ...state,
        isLogout: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      setCookie('accessToken', null, 1);
      return {
        ...state,
        accessToken: null,
      };
    case actionTypes.VERIFY_TOKEN_SUCCESS: {
      const { accessToken, result } = action.payload;
      return {
        ...state,
        verifying: false,
        accessToken,
        ssoUserId: result.sso_user_id,
        userId: result.id,
        userInfo: {
          userId: result.id,
          name: result.name,
          email: result.email,
          avatar: result.avatarUrl,
          bgColor: randomAvatarColor(),
        },
      };
    }
    case actionTypes.VERIFY_TOKEN_FAILURE:
      return { ...state, verifying: false };
    default:
      return state;
  }
}
