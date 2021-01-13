/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va";
export { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va";

/* START_OF_SYMBOL_DEFINITION id_pkix_ocsp_response */
/**
 * @summary id_pkix_ocsp_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-response        OBJECT IDENTIFIER ::= { id-pkix-ocsp 4 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_response: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_pkix_ocsp
);
/* END_OF_SYMBOL_DEFINITION id_pkix_ocsp_response */

/* eslint-enable */
