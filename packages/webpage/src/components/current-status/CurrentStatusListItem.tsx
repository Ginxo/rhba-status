import { NodeCollapseOutlined } from "@ant-design/icons";
import { Card, List, Tag, Tooltip, Typography } from "antd";
import React, { Suspense } from "react";
import ProjectContainer from "../../components/project/ProjectContainer";
import { IProject } from "../../model/project.model";
import { STATUS_MARGIN_TOP } from "../../shared/constants";
import { getProjectKey } from "../../utils/pullrequest.utils";
import PullRequestCheckTag from "../pullrequests/PullRequestCheckTag";
import PullRequestStatistics from "../pullrequests/PullRequestStatistics";
import Loading from "../shared/Loading";

interface ICurrentStatusListItem {
  project: IProject;
}
export const CurrentStatusListItem: React.FC<
  ICurrentStatusListItem
> = props => {
  return (
    <List.Item
      id={getProjectKey(props.project)}
      style={{
        marginTop: 0,
        marginBottom: 8,
        padding: 0,
        scrollMarginTop: STATUS_MARGIN_TOP
      }}
    >
      <Card
        title={
          <Typography.Title level={4}>
            <PullRequestCheckTag
              title="Number of pull requests"
              value={props.project.pullRequests.length}
              color="default"
              icon={<NodeCollapseOutlined />}
              showZero={true}
            />
            {props.project.key}
          </Typography.Title>
        }
        key={props.project.key}
        extra={[
          <Tooltip title="Affected Branches">
            {Array.from(
              new Set(props.project.pullRequests.map(e => e.base?.ref))
            )
              .filter(e => e)
              .sort((a, b) => (a && b ? (a < b ? -1 : a > b ? 1 : 0) : 0))
              .map(e => (
                <Tag>{e}</Tag>
              ))}
          </Tooltip>,
          <Suspense fallback={<Loading size={16} />}>
            <PullRequestStatistics pullRequests={props.project.pullRequests} />
          </Suspense>
        ]}
        style={{
          width: "100%",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0
        }}
      >
        <ProjectContainer project={props.project} />
      </Card>
    </List.Item>
  );
};

export default CurrentStatusListItem;
