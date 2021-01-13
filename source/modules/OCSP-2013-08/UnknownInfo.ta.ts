/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UnknownInfo */
/**
 * @summary UnknownInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnknownInfo  ::=  NULL
 * ```
 */
export type UnknownInfo = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION UnknownInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownInfo */
let _cached_decoder_for_UnknownInfo: $.ASN1Decoder<UnknownInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownInfo */

/* START_OF_SYMBOL_DEFINITION _decode_UnknownInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) UnknownInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnknownInfo} The decoded data structure.
 */
export function _decode_UnknownInfo(el: _Element) {
    if (!_cached_decoder_for_UnknownInfo) {
        _cached_decoder_for_UnknownInfo = $._decodeNull;
    }
    return _cached_decoder_for_UnknownInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnknownInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownInfo */
let _cached_encoder_for_UnknownInfo: $.ASN1Encoder<UnknownInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownInfo */

/* START_OF_SYMBOL_DEFINITION _encode_UnknownInfo */
/**
 * @summary Encodes a(n) UnknownInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnknownInfo, encoded as an ASN.1 Element.
 */
export function _encode_UnknownInfo(
    value: UnknownInfo,
    elGetter: $.ASN1Encoder<UnknownInfo>
) {
    if (!_cached_encoder_for_UnknownInfo) {
        _cached_encoder_for_UnknownInfo = $._encodeNull;
    }
    return _cached_encoder_for_UnknownInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnknownInfo */

/* eslint-enable */
