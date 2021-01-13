/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_OCSPResponseStatus */
/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```@enum {number}
 */
export enum _enum_for_OCSPResponseStatus {
    successful = 0,
    malformedRequest = 1,
    internalError = 2,
    tryLater = 3,
    sigRequired = 5,
    unauthorized = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus */
/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```@enum {number}
 */
export type OCSPResponseStatus = _enum_for_OCSPResponseStatus;
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus */
/**
 * @summary OCSPResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPResponseStatus  ::=  ENUMERATED {
 * successful            (0), -- Response has valid confirmations
 * malformedRequest      (1), -- Illegal confirmation request
 * internalError         (2), -- Internal error in issuer
 * tryLater              (3), -- Try again later
 *                             -- (4) is not used
 * sigRequired           (5), -- Must sign the request
 * unauthorized          (6)  -- Request unauthorized
 * }
 * ```@enum {number}
 */
export const OCSPResponseStatus = _enum_for_OCSPResponseStatus;
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_successful */
/**
 * @summary OCSPResponseStatus_successful
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_successful */

/* START_OF_SYMBOL_DEFINITION successful */
/**
 * @summary successful
 * @constant
 * @type {number}
 */
export const successful: OCSPResponseStatus =
    OCSPResponseStatus.successful; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION successful */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_malformedRequest */
/**
 * @summary OCSPResponseStatus_malformedRequest
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_malformedRequest */

/* START_OF_SYMBOL_DEFINITION malformedRequest */
/**
 * @summary malformedRequest
 * @constant
 * @type {number}
 */
export const malformedRequest: OCSPResponseStatus =
    OCSPResponseStatus.malformedRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION malformedRequest */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_internalError */
/**
 * @summary OCSPResponseStatus_internalError
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_internalError */

/* START_OF_SYMBOL_DEFINITION internalError */
/**
 * @summary internalError
 * @constant
 * @type {number}
 */
export const internalError: OCSPResponseStatus =
    OCSPResponseStatus.internalError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internalError */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_tryLater */
/**
 * @summary OCSPResponseStatus_tryLater
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_tryLater */

/* START_OF_SYMBOL_DEFINITION tryLater */
/**
 * @summary tryLater
 * @constant
 * @type {number}
 */
export const tryLater: OCSPResponseStatus =
    OCSPResponseStatus.tryLater; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tryLater */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_sigRequired */
/**
 * @summary OCSPResponseStatus_sigRequired
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_sigRequired */

/* START_OF_SYMBOL_DEFINITION sigRequired */
/**
 * @summary sigRequired
 * @constant
 * @type {number}
 */
export const sigRequired: OCSPResponseStatus =
    OCSPResponseStatus.sigRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sigRequired */

/* START_OF_SYMBOL_DEFINITION OCSPResponseStatus_unauthorized */
/**
 * @summary OCSPResponseStatus_unauthorized
 * @constant
 * @type {number}
 */
export const OCSPResponseStatus_unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OCSPResponseStatus_unauthorized */

/* START_OF_SYMBOL_DEFINITION unauthorized */
/**
 * @summary unauthorized
 * @constant
 * @type {number}
 */
export const unauthorized: OCSPResponseStatus =
    OCSPResponseStatus.unauthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorized */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPResponseStatus */
let _cached_decoder_for_OCSPResponseStatus: $.ASN1Decoder<OCSPResponseStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _decode_OCSPResponseStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) OCSPResponseStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OCSPResponseStatus} The decoded data structure.
 */
export function _decode_OCSPResponseStatus(el: _Element) {
    if (!_cached_decoder_for_OCSPResponseStatus) {
        _cached_decoder_for_OCSPResponseStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_OCSPResponseStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPResponseStatus */
let _cached_encoder_for_OCSPResponseStatus: $.ASN1Encoder<OCSPResponseStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPResponseStatus */

/* START_OF_SYMBOL_DEFINITION _encode_OCSPResponseStatus */
/**
 * @summary Encodes a(n) OCSPResponseStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCSPResponseStatus, encoded as an ASN.1 Element.
 */
export function _encode_OCSPResponseStatus(
    value: OCSPResponseStatus,
    elGetter: $.ASN1Encoder<OCSPResponseStatus>
) {
    if (!_cached_encoder_for_OCSPResponseStatus) {
        _cached_encoder_for_OCSPResponseStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_OCSPResponseStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OCSPResponseStatus */

/* eslint-enable */
