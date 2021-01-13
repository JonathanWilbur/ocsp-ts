/* eslint-disable */
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import { id_pkix_ocsp_pref_sig_algs } from "../OCSP-2013-08/id-pkix-ocsp-pref-sig-algs.va";
import {
    PreferredSignatureAlgorithms,
    _decode_PreferredSignatureAlgorithms,
    _encode_PreferredSignatureAlgorithms,
} from "../OCSP-2013-08/PreferredSignatureAlgorithms.ta";

/* START_OF_SYMBOL_DEFINITION re_ocsp_preferred_signature_algorithms */
/**
 * @summary re_ocsp_preferred_signature_algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-preferred-signature-algorithms EXTENSION ::= {
 * SYNTAX PreferredSignatureAlgorithms
 * IDENTIFIED BY id-pkix-ocsp-pref-sig-algs  }
 * ```
 *
 * @constant
 * @type {EXTENSION<PreferredSignatureAlgorithms>}
 * @implements {EXTENSION<PreferredSignatureAlgorithms>}
 */
export const re_ocsp_preferred_signature_algorithms: EXTENSION<PreferredSignatureAlgorithms> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PreferredSignatureAlgorithms,
    },
    encoderFor: {
        "&ExtnType": _encode_PreferredSignatureAlgorithms,
    },
    "&id": id_pkix_ocsp_pref_sig_algs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION re_ocsp_preferred_signature_algorithms */

/* eslint-enable */
