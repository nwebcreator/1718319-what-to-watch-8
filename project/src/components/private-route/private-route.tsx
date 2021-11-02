import { connect, ConnectedProps } from 'react-redux';
import { History } from 'history';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../routes';
import { State } from '../../types/state';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = ({ authorizationStatus }: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;


function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const { exact, path, render, authorizationStatus } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render(routeProps)
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default connector(PrivateRoute);
export { PrivateRoute };
