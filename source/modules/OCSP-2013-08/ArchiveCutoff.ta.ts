/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ArchiveCutoff */
/**
 * @summary ArchiveCutoff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveCutoff  ::=  GeneralizedTime
 * ```
 */
export type ArchiveCutoff = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArchiveCutoff */
let _cached_decoder_for_ArchiveCutoff: $.ASN1Decoder<ArchiveCutoff> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _decode_ArchiveCutoff */
/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveCutoff
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArchiveCutoff} The decoded data structure.
 */
export function _decode_ArchiveCutoff(el: _Element) {
    if (!_cached_decoder_for_ArchiveCutoff) {
        _cached_decoder_for_ArchiveCutoff = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ArchiveCutoff(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArchiveCutoff */
let _cached_encoder_for_ArchiveCutoff: $.ASN1Encoder<ArchiveCutoff> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _encode_ArchiveCutoff */
/**
 * @summary Encodes a(n) ArchiveCutoff into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveCutoff, encoded as an ASN.1 Element.
 */
export function _encode_ArchiveCutoff(
    value: ArchiveCutoff,
    elGetter: $.ASN1Encoder<ArchiveCutoff>
) {
    if (!_cached_encoder_for_ArchiveCutoff) {
        _cached_encoder_for_ArchiveCutoff = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ArchiveCutoff(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArchiveCutoff */

/* eslint-enable */
