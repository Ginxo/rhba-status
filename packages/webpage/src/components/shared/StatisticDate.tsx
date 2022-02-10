import { ClockCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin, Statistic, Tag, Tooltip } from "antd";
import prettyMilliseconds from "pretty-ms";
import React, { useEffect, useState } from "react";

interface IStatisticDate {
  date: Date;
  intervalSeconds?: number;
  text: string;
}
export const StatisticDate: React.FC<IStatisticDate> = props => {
  const [dateDifferenceMiliseconds, setDateDifferenceMiliseconds] =
    useState<number>(0);

  useEffect(() => {
    if (props.date && props.intervalSeconds) {
      const interval = setInterval(
        () =>
          setDateDifferenceMiliseconds(
            new Date().getTime() - props.date.getTime()
          ),
        props.intervalSeconds * 1000
      );
      return () => clearInterval(interval);
    }
  }, [props.date]);

  return (
    <>
      <Statistic
        title={props.text}
        loading={!props.date}
        valueStyle={{ display: "none" }}
      />
      {props.date && dateDifferenceMiliseconds ? (
        <Tooltip placement="bottom" title={props.date.toLocaleString()}>
          <Tag
            icon={<ClockCircleOutlined />}
            color="success"
            style={{ marginTop: 5 }}
          >
            {prettyMilliseconds(dateDifferenceMiliseconds)}
          </Tag>
        </Tooltip>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </>
  );
};

export default StatisticDate;
