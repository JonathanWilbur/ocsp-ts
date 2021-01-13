/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyHash */
/**
 * @summary KeyHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyHash  ::=  OCTET STRING
 * ```
 */
export type KeyHash = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KeyHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyHash */
let _cached_decoder_for_KeyHash: $.ASN1Decoder<KeyHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyHash */

/* START_OF_SYMBOL_DEFINITION _decode_KeyHash */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyHash} The decoded data structure.
 */
export function _decode_KeyHash(el: _Element) {
    if (!_cached_decoder_for_KeyHash) {
        _cached_decoder_for_KeyHash = $._decodeOctetString;
    }
    return _cached_decoder_for_KeyHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyHash */
let _cached_encoder_for_KeyHash: $.ASN1Encoder<KeyHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyHash */

/* START_OF_SYMBOL_DEFINITION _encode_KeyHash */
/**
 * @summary Encodes a(n) KeyHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyHash, encoded as an ASN.1 Element.
 */
export function _encode_KeyHash(
    value: KeyHash,
    elGetter: $.ASN1Encoder<KeyHash>
) {
    if (!_cached_encoder_for_KeyHash) {
        _cached_encoder_for_KeyHash = $._encodeOctetString;
    }
    return _cached_encoder_for_KeyHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyHash */

/* eslint-enable */
