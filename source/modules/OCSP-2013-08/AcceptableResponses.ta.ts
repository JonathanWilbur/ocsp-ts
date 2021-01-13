/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca";
export { ResponseSet } from "../OCSP-2013-08/ResponseSet.osa";

/* START_OF_SYMBOL_DEFINITION AcceptableResponses */
/**
 * @summary AcceptableResponses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableResponses  ::=  SEQUENCE OF RESPONSE.&id({ResponseSet})
 * ```
 */
export type AcceptableResponses = OBJECT_IDENTIFIER[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AcceptableResponses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptableResponses */
let _cached_decoder_for_AcceptableResponses: $.ASN1Decoder<AcceptableResponses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptableResponses */

/* START_OF_SYMBOL_DEFINITION _decode_AcceptableResponses */
/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableResponses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableResponses} The decoded data structure.
 */
export function _decode_AcceptableResponses(el: _Element) {
    if (!_cached_decoder_for_AcceptableResponses) {
        _cached_decoder_for_AcceptableResponses = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_AcceptableResponses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AcceptableResponses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptableResponses */
let _cached_encoder_for_AcceptableResponses: $.ASN1Encoder<AcceptableResponses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptableResponses */

/* START_OF_SYMBOL_DEFINITION _encode_AcceptableResponses */
/**
 * @summary Encodes a(n) AcceptableResponses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableResponses, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableResponses(
    value: AcceptableResponses,
    elGetter: $.ASN1Encoder<AcceptableResponses>
) {
    if (!_cached_encoder_for_AcceptableResponses) {
        _cached_encoder_for_AcceptableResponses = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_AcceptableResponses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AcceptableResponses */

/* eslint-enable */
