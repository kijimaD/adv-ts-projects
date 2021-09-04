import * as React from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { IPersonState } from './State';
import { AddressValidation } from './Validation/AddressValidation';
import { IValidation } from './Validation/IValidation';
import { PersonValidation } from './Validation/PersonValidation';
import { PhoneValidation } from './Validation/PhoneValidation';

interface IValidationProps {
  CurrentState : IPersonState;
  CanSave : (canSave : boolean) => void;
}
