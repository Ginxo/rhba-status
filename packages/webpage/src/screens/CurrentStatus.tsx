import { Layout, Skeleton } from "antd";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import CurrentStatusContent from "../components/current-status/CurrentStatusContent";
import * as dataService from "../service/data.service";
import { STATUS_MARGIN_TOP } from "../shared/constants";

const CurrentStatusHeader = React.lazy(
  () => import("../components/current-status/CurrentStatusHeader")
);
const CrossPullRequestDrawer = React.lazy(
  () => import("../components/pullrequests/CrossPullRequestDrawer")
);
const ChecksDrawer = React.lazy(
  () => import("../components/checks/ChecksDrawer")
);
interface ICurrentStatus {}
export const CurrentStatus: React.FC<ICurrentStatus> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(dataService.loadData());
    }
  }, [dispatch]);

  return (
    <Layout>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 100,
          width: "100%",
          margin: 0,
          padding: 0,
          backgroundColor: "#f0f2f5"
        }}
      >
        <Suspense fallback={<Skeleton />}>
          <CurrentStatusHeader />
        </Suspense>
      </Layout.Header>
      <Layout.Content>
        <Layout
          style={{
            padding: "0 24px",
            marginTop: STATUS_MARGIN_TOP,
            marginBottom: 10
          }}
        >
          {/* <Header
            style={{
              margin: 0,
              padding: 0,
              marginRight: STATUS_MARGIN_RIGHT,
              marginBottom: GENERAL_MARGIN,
              backgroundColor: "#f0f2f5",
              height: "auto"
            }}
          >
            <Card style={{ margin: 0, padding: 0 }}>
              <Collapse
                defaultActiveKey={["1"]}
                ghost
                style={{ margin: 0, padding: 0 }}
              >
                <Collapse.Panel
                  header={<Typography.Title level={5}>Filter</Typography.Title>}
                  key="1"
                  style={{ margin: 0, padding: 0 }}
                >
                  <Suspense fallback={<Skeleton />}>
                    <Filter onFilter={onFilter} />
                  </Suspense>
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Header> */}
          <Layout.Content>
            <CurrentStatusContent />
            <Suspense fallback={<></>}>
              <CrossPullRequestDrawer />
            </Suspense>
            <Suspense fallback={<></>}>
              <ChecksDrawer />
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
};

export default CurrentStatus;
