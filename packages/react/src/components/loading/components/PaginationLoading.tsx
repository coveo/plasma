import * as React from 'react';
import {ContentLoadingPlaceholder} from './ContentLoadingPlaceholder';
import {TextLoadingPlaceholder} from './TextLoadingPlaceholder';

export const PaginationLoading = () => (
    <div className="pagination-container">
        <div className="items-per-page prepended-flat-select">
            <div className="flat-select center-align">
                <TextLoadingPlaceholder small className="mr2" />
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
            </div>
        </div>
        <div className="flex-auto" />
        <div className="pagination">
            <div className="flat-select center-align">
                <TextLoadingPlaceholder word className="mr2" />
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <ContentLoadingPlaceholder className="flat-select-option mod-no-border">
                    <span />
                </ContentLoadingPlaceholder>
                <TextLoadingPlaceholder word className="mr2" />
            </div>
        </div>
    </div>
);
