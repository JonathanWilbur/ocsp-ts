/* eslint-disable */
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import { CrlID, _decode_CrlID, _encode_CrlID } from "../OCSP-2013-08/CrlID.ta";
import { id_pkix_ocsp_crl } from "../OCSP-2013-08/id-pkix-ocsp-crl.va";

/* START_OF_SYMBOL_DEFINITION re_ocsp_crl */
/**
 * @summary re_ocsp_crl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-crl EXTENSION ::= { SYNTAX CrlID IDENTIFIED BY
 *                             id-pkix-ocsp-crl }
 * ```
 *
 * @constant
 * @type {EXTENSION<CrlID>}
 * @implements {EXTENSION<CrlID>}
 */
export const re_ocsp_crl: EXTENSION<CrlID> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CrlID,
    },
    encoderFor: {
        "&ExtnType": _encode_CrlID,
    },
    "&id": id_pkix_ocsp_crl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION re_ocsp_crl */

/* eslint-enable */
