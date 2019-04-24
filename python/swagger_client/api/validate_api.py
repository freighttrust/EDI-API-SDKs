# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class ValidateApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def validate_gs(self, **kwargs):  # noqa: E501
        """validate_gs  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_gs(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiX12GS gs:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.validate_gs_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.validate_gs_with_http_info(**kwargs)  # noqa: E501
            return data

    def validate_gs_with_http_info(self, **kwargs):  # noqa: E501
        """validate_gs  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_gs_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiX12GS gs:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['gs']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method validate_gs" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'gs' in params:
            body_params = params['gs']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/validate/gs', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def validate_isa(self, **kwargs):  # noqa: E501
        """validate_isa  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_isa(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiX12ISA isa:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.validate_isa_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.validate_isa_with_http_info(**kwargs)  # noqa: E501
            return data

    def validate_isa_with_http_info(self, **kwargs):  # noqa: E501
        """validate_isa  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_isa_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiX12ISA isa:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['isa']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method validate_isa" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'isa' in params:
            body_params = params['isa']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/validate/isa', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def validate_transactions(self, **kwargs):  # noqa: E501
        """validate_transactions  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_transactions(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricWebApiModelsValidateEdi validate_edi:
        :return: EdiFabricCoreModelEdiErrorContextsMessageErrorContext
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.validate_transactions_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.validate_transactions_with_http_info(**kwargs)  # noqa: E501
            return data

    def validate_transactions_with_http_info(self, **kwargs):  # noqa: E501
        """validate_transactions  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_transactions_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricWebApiModelsValidateEdi validate_edi:
        :return: EdiFabricCoreModelEdiErrorContextsMessageErrorContext
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['validate_edi']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method validate_transactions" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'validate_edi' in params:
            body_params = params['validate_edi']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/validate/transactions', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='EdiFabricCoreModelEdiErrorContextsMessageErrorContext',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def validate_unb(self, **kwargs):  # noqa: E501
        """validate_unb  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_unb(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiEdifactUNB unb:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.validate_unb_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.validate_unb_with_http_info(**kwargs)  # noqa: E501
            return data

    def validate_unb_with_http_info(self, **kwargs):  # noqa: E501
        """validate_unb  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_unb_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiEdifactUNB unb:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['unb']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method validate_unb" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'unb' in params:
            body_params = params['unb']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/validate/unb', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def validate_ung(self, **kwargs):  # noqa: E501
        """validate_ung  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_ung(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiEdifactUNG ung:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.validate_ung_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.validate_ung_with_http_info(**kwargs)  # noqa: E501
            return data

    def validate_ung_with_http_info(self, **kwargs):  # noqa: E501
        """validate_ung  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.validate_ung_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param EdiFabricCoreModelEdiEdifactUNG ung:
        :return: list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['ung']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method validate_ung" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'ung' in params:
            body_params = params['ung']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json', 'application/xml', 'text/xml', 'application/*+xml'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/validate/ung', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[EdiFabricCoreModelEdiErrorContextsSegmentErrorContext]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
