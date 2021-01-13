/* eslint-disable */
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import {
    AcceptableResponses,
    _decode_AcceptableResponses,
    _encode_AcceptableResponses,
} from "../OCSP-2013-08/AcceptableResponses.ta";
import { id_pkix_ocsp_response } from "../OCSP-2013-08/id-pkix-ocsp-response.va";

/* START_OF_SYMBOL_DEFINITION re_ocsp_response */
/**
 * @summary re_ocsp_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-response EXTENSION ::= { SYNTAX AcceptableResponses IDENTIFIED
 *                                 BY id-pkix-ocsp-response }
 * ```
 *
 * @constant
 * @type {EXTENSION<AcceptableResponses>}
 * @implements {EXTENSION<AcceptableResponses>}
 */
export const re_ocsp_response: EXTENSION<AcceptableResponses> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptableResponses,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptableResponses,
    },
    "&id": id_pkix_ocsp_response /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION re_ocsp_response */

/* eslint-enable */
