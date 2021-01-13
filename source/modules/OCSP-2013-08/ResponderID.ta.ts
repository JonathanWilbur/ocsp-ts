/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "x500-ts/dist/node/modules/InformationFramework/Name.ta";
import {
    KeyHash,
    _decode_KeyHash,
    _encode_KeyHash,
} from "../OCSP-2013-08/KeyHash.ta";

/* START_OF_SYMBOL_DEFINITION ResponderID */
/**
 * @summary ResponderID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponderID  ::=  CHOICE {
 * byName   [1] Name,
 * byKey    [2] KeyHash }
 * ```
 */
export type ResponderID =
    | { byName: Name } /* CHOICE_ALT_ROOT */
    | { byKey: KeyHash } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ResponderID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponderID */
let _cached_decoder_for_ResponderID: $.ASN1Decoder<ResponderID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponderID */

/* START_OF_SYMBOL_DEFINITION _decode_ResponderID */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponderID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponderID} The decoded data structure.
 */
export function _decode_ResponderID(el: _Element) {
    if (!_cached_decoder_for_ResponderID) {
        _cached_decoder_for_ResponderID = $._decode_inextensible_choice<ResponderID>(
            {
                "CONTEXT 1": [
                    "byName",
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                "CONTEXT 2": [
                    "byKey",
                    $._decode_explicit<KeyHash>(() => _decode_KeyHash),
                ],
            }
        );
    }
    return _cached_decoder_for_ResponderID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponderID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponderID */
let _cached_encoder_for_ResponderID: $.ASN1Encoder<ResponderID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponderID */

/* START_OF_SYMBOL_DEFINITION _encode_ResponderID */
/**
 * @summary Encodes a(n) ResponderID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponderID, encoded as an ASN.1 Element.
 */
export function _encode_ResponderID(
    value: ResponderID,
    elGetter: $.ASN1Encoder<ResponderID>
) {
    if (!_cached_encoder_for_ResponderID) {
        _cached_encoder_for_ResponderID = $._encode_choice<ResponderID>(
            {
                byName: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Name,
                    $.BER
                ),
                byKey: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_KeyHash,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResponderID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponderID */

/* eslint-enable */
