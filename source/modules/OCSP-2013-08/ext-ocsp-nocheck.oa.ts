/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import { id_pkix_ocsp_nocheck } from "../OCSP-2013-08/id-pkix-ocsp-nocheck.va";

/* START_OF_SYMBOL_DEFINITION ext_ocsp_nocheck */
/**
 * @summary ext_ocsp_nocheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ext-ocsp-nocheck EXTENSION ::= { SYNTAX NULL IDENTIFIED
 *                                 BY id-pkix-ocsp-nocheck }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const ext_ocsp_nocheck: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_pkix_ocsp_nocheck /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ext_ocsp_nocheck */

/* eslint-enable */
