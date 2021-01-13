/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va";
export { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va";

/* START_OF_SYMBOL_DEFINITION id_pkix_ocsp_service_locator */
/**
 * @summary id_pkix_ocsp_service_locator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-service-locator OBJECT IDENTIFIER ::= { id-pkix-ocsp 7 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_service_locator: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_pkix_ocsp
);
/* END_OF_SYMBOL_DEFINITION id_pkix_ocsp_service_locator */

/* eslint-enable */
