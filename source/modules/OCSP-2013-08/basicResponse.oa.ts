/* eslint-disable */
import {
    BasicOCSPResponse,
    _decode_BasicOCSPResponse,
    _encode_BasicOCSPResponse,
} from "../OCSP-2013-08/BasicOCSPResponse.ta";
import { id_pkix_ocsp_basic } from "../OCSP-2013-08/id-pkix-ocsp-basic.va";
import { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca";
export {
    BasicOCSPResponse,
    _decode_BasicOCSPResponse,
    _encode_BasicOCSPResponse,
} from "../OCSP-2013-08/BasicOCSPResponse.ta";
export { id_pkix_ocsp_basic } from "../OCSP-2013-08/id-pkix-ocsp-basic.va";
export { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca";

/* START_OF_SYMBOL_DEFINITION basicResponse */
/**
 * @summary basicResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicResponse RESPONSE ::= { BasicOCSPResponse IDENTIFIED BY id-pkix-ocsp-basic }
 * ```
 *
 * @constant
 * @type {RESPONSE<BasicOCSPResponse>}
 * @implements {RESPONSE<BasicOCSPResponse>}
 */
export const basicResponse: RESPONSE<BasicOCSPResponse> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_BasicOCSPResponse,
    },
    encoderFor: {
        "&Type": _encode_BasicOCSPResponse,
    },
    "&id": id_pkix_ocsp_basic /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION basicResponse */

/* eslint-enable */
