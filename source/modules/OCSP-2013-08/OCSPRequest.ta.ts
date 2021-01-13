/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signature,
    _decode_Signature,
    _encode_Signature,
} from "../OCSP-2013-08/Signature.ta";
import {
    TBSRequest,
    _decode_TBSRequest,
    _encode_TBSRequest,
} from "../OCSP-2013-08/TBSRequest.ta";
export {
    Signature,
    _decode_Signature,
    _encode_Signature,
} from "../OCSP-2013-08/Signature.ta";
export {
    TBSRequest,
    _decode_TBSRequest,
    _encode_TBSRequest,
} from "../OCSP-2013-08/TBSRequest.ta";

/* START_OF_SYMBOL_DEFINITION OCSPRequest */
/**
 * @summary OCSPRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSPRequest ::= SEQUENCE {
 * tbsRequest                  TBSRequest,
 * optionalSignature   [0]     EXPLICIT Signature OPTIONAL }
 * ```
 *
 * @class
 */
export class OCSPRequest {
    constructor(
        /**
         * @summary `tbsRequest`.
         * @public
         * @readonly
         */
        readonly tbsRequest: TBSRequest,
        /**
         * @summary `optionalSignature`.
         * @public
         * @readonly
         */
        readonly optionalSignature: OPTIONAL<Signature>
    ) {}

    /**
     * @summary Restructures an object into a OCSPRequest
     * @description
     *
     * This takes an `object` and converts it to a `OCSPRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OCSPRequest`.
     * @returns {OCSPRequest}
     */
    public static _from_object(
        _o: { [_K in keyof OCSPRequest]: OCSPRequest[_K] }
    ): OCSPRequest {
        return new OCSPRequest(_o.tbsRequest, _o.optionalSignature);
    }
}
/* END_OF_SYMBOL_DEFINITION OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OCSPRequest */
/**
 * @summary The Leading Root Component Types of OCSPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OCSPRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tbsRequest",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionalSignature",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OCSPRequest */
/**
 * @summary The Trailing Root Component Types of OCSPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OCSPRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OCSPRequest */
/**
 * @summary The Extension Addition Component Types of OCSPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OCSPRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPRequest */
let _cached_decoder_for_OCSPRequest: $.ASN1Decoder<OCSPRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _decode_OCSPRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) OCSPRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OCSPRequest} The decoded data structure.
 */
export function _decode_OCSPRequest(el: _Element) {
    if (!_cached_decoder_for_OCSPRequest) {
        _cached_decoder_for_OCSPRequest = function (el: _Element): OCSPRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tbsRequest!: TBSRequest;
            let optionalSignature: OPTIONAL<Signature>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                tbsRequest: (_el: _Element): void => {
                    tbsRequest = _decode_TBSRequest(_el);
                },
                optionalSignature: (_el: _Element): void => {
                    optionalSignature = $._decode_explicit<Signature>(
                        () => _decode_Signature
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OCSPRequest,
                _extension_additions_list_spec_for_OCSPRequest,
                _root_component_type_list_2_spec_for_OCSPRequest,
                undefined
            );
            return new OCSPRequest(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tbsRequest,
                optionalSignature
            );
        };
    }
    return _cached_decoder_for_OCSPRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPRequest */
let _cached_encoder_for_OCSPRequest: $.ASN1Encoder<OCSPRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OCSPRequest */

/* START_OF_SYMBOL_DEFINITION _encode_OCSPRequest */
/**
 * @summary Encodes a(n) OCSPRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OCSPRequest, encoded as an ASN.1 Element.
 */
export function _encode_OCSPRequest(
    value: OCSPRequest,
    elGetter: $.ASN1Encoder<OCSPRequest>
) {
    if (!_cached_encoder_for_OCSPRequest) {
        _cached_encoder_for_OCSPRequest = function (
            value: OCSPRequest,
            elGetter: $.ASN1Encoder<OCSPRequest>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TBSRequest(
                            value.tbsRequest,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.optionalSignature === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Signature,
                                  $.BER
                              )(value.optionalSignature, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OCSPRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OCSPRequest */

/* eslint-enable */
