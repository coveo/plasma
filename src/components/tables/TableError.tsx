import * as React from 'react';

export interface IErrorSection {
  errorDescription: string;
  errorPrecision: string;
  errorTroubleshoot: string;
  errorStatus: string;
  errorCode: string;
}

export interface ITableErrorProps extends React.ClassAttributes<TableError> {
  error: IErrorSection;
  descriptionLabel?: string;
  troubleshootingLabel?: string;
  errorCodeLabel?: string;
}

export const DESCRIPTION_LABEL: string = 'Description';
export const TROUBLESHOOTING_LABEL: string = 'Troubleshooting';
export const ERROR_CODE_LABEL: string = 'Error code';

export class TableError extends React.Component<ITableErrorProps, any> {

  render() {
    let descriptionLabel: string = this.props.descriptionLabel || DESCRIPTION_LABEL;
    let troubleshootingLabel: string = this.props.troubleshootingLabel || TROUBLESHOOTING_LABEL;
    let errorCodeLabel: string = this.props.errorCodeLabel || ERROR_CODE_LABEL;

    let errorPrecision: JSX.Element = this.props.error.errorPrecision ?
      <div className='error-description error-description-precision' dangerouslySetInnerHTML={{ __html: this.props.error.errorPrecision }}></div> :
      null;

    return (
      <div className='source-activity-error-container'>
        <h4 className='caps bold error-title'>{this.props.error.errorStatus}</h4>
        <section className='columns'>
          <div className='details-container error-description-container'>
            <div className='label text-light-blue'>{descriptionLabel}</div>
            <div className='value error-description'>
              <div dangerouslySetInnerHTML={{ __html: this.props.error.errorDescription }}></div>
              {errorPrecision}
            </div>
          </div>
          <div className='details-container troubleshooting-container'>
            <div className='label text-light-blue'>{troubleshootingLabel}</div>
            <div className='value' dangerouslySetInnerHTML={{ __html: this.props.error.errorTroubleshoot }}></div>
            <div className='label text-light-blue'>{errorCodeLabel}</div>
            <div className='value text-dark-blue'>{this.props.error.errorCode}</div>
          </div>
        </section>
      </div>
    );
  }
}
