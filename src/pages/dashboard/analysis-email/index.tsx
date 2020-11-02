import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input } from 'antd';
import React, { Component, Suspense } from 'react';
import { PageContainer, FooterToolbar, GridContent } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { connect, Dispatch } from 'umi';
import { AnalysisData } from './data.d';
import PageLoading from './components/PageLoading';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import { getTimeDistance } from './utils/utils';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const EmailMetrics = React.lazy(() => import('./components/EmailMetrics'));
const SalesCard = React.lazy(() => import('./components/SalesCard'));

interface AnalysisProps {
    dashboardemailanalysis: AnalysisData;
    dispatch: Dispatch;
    loading: boolean;
}

const AnalysisEmail: React.FC<AnalysisProps> = (props) => {

    const { dispatch } = props;

    const {
        visitData,
        salesData
    } = props.dashboardemailanalysis;


    React.useEffect(() => {
        requestAnimationFrame(() => {
            dispatch({
                type: 'dashboardemailanalysis/fetch',
            });
        });
        return () => {
            dispatch({
                type: 'dashboardemailanalysis/clear',
            });
        }
    }, []);


    return (
        <GridContent>
            <React.Fragment>
                <Suspense fallback={<PageLoading />}>
                    {/* <IntroduceRow loading={props.loading} visitData={visitData} /> */}
                    <EmailMetrics loading={props.loading} visitData={visitData} />
                </Suspense>

                <Suspense fallback={null}>
                    <SalesCard
                        rangePickerValue={getTimeDistance('year')}
                        salesData={salesData}
                        isActive={() => ''}
                        handleRangePickerChange={() => { }}
                        loading={props.loading}
                        selectDate={() => { }}
                    />
                </Suspense>

            </React.Fragment>
        </GridContent>
    );
};

export default connect(
    ({
        dashboardemailanalysis,
        loading,
    }: {
        dashboardemailanalysis: any;
        loading: {
            effects: { [key: string]: boolean };
        };
    }) => ({
        dashboardemailanalysis,
        loading: loading.effects['dashboardemailanalysis/fetch'],
    }),
)(AnalysisEmail);
