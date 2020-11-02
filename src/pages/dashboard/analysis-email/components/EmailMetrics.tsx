import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';

import { FormattedMessage } from 'umi';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import { VisitDataType } from '../data.d';
import Trend from './Trend';
// import Yuan from '../utils/Yuan';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const EmailMetrics = ({ loading, visitData }: { loading: boolean; visitData: VisitDataType[] }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={
          <FormattedMessage
            id="dashboardemailanalysis.analysis.send-count"
            defaultMessage="Total Sales"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.send-count"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={numeral(952727).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.send-count"
                defaultMessage="Send count"
              />
            }
            value={`${numeral(12423).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          <FormattedMessage
            id="dashboardemailanalysis.analysis.week"
            defaultMessage="Weekly Changes"
          />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboardemailanalysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    {/* 异常量 */}
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboardemailanalysis.analysis.exception-count" defaultMessage="Exception count" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.exception-count"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.exception-rate"
                defaultMessage="Exception rate"
              />
            }
            value={<span className={styles.trendText}>36%</span>}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#00FF00" data={visitData} />
      </ChartCard>
    </Col>

    {/* 重复量 */}

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboardemailanalysis.analysis.duplicated-count" defaultMessage="Duplicate count" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.duplicated-count"
                defaultMessage="Duplicate count"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.duplicated-rate"
                defaultMessage="Duplicated rate"
              />
            }
            value="20%"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>

    {/* 阅读量 */}
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="dashboardemailanalysis.analysis.read-count" defaultMessage="Read count" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.read-count"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.read-rate"
                defaultMessage="Read rate"
              />
            }
            value={<span className={styles.trendText}>90%</span>}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#FF0000" data={visitData} />
      </ChartCard>
    </Col>


    {/* <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title={
          <FormattedMessage
            id="dashboardemailanalysis.analysis.operational-effect"
            defaultMessage="Operational Effect"
          />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage
                id="dashboardemailanalysis.analysis.introduce"
                defaultMessage="Introduce"
              />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        total="78%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              <FormattedMessage
                id="dashboardemailanalysis.analysis.week"
                defaultMessage="Weekly Changes"
              />
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              <FormattedMessage
                id="dashboardemailanalysis.analysis.day"
                defaultMessage="Weekly Changes"
              />
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
      </ChartCard>
    </Col> */}

  </Row>
);

export default EmailMetrics;
